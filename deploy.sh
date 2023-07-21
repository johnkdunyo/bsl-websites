#!/bin/bash
NETWORK_NAME="apps_network"
COMPOSE_FILE="docker-compose.yml"
ENV_FILE=".env"


echo "---------preparing to deploy------------"
# Check if the network already exists
if docker network inspect $NETWORK_NAME >/dev/null 2>&1; 
then
  NETWORK_ID=$(docker network inspect --format='{{.Id}}' $NETWORK_NAME)
  echo "Network $NETWORK_NAME already exists. Disconnecting containers..."
  for container_id in $(docker network inspect -f '{{range $key, $value := .Containers}}{{println $key}}{{end}}' $NETWORK_ID); 
  do
    docker network disconnect -f $NETWORK_ID $container_id
  done
  echo "Deleting network $NETWORK_NAME..., with Id $NETWORK_ID"
  docker network rm $NETWORK_NAME
fi

# Create the network
echo "Creating network $NETWORK_NAME..."
docker network create $NETWORK_NAME


# Delay 
echo "Waiting for few seconds..."
sleep 2

# Run Docker Compose
echo "Running Docker Compose with env file..."
docker-compose --env-file $ENV_FILE -f $COMPOSE_FILE up -d

# Delay 
echo "Waiting for few seconds..."
sleep 2

# Connect containers to the network
echo "Connecting containers to network $NETWORK_NAME..."
for container_name in bsl bdp isg spectrumfibre; do
  container_id=$(docker ps -qf "name=$container_name")
  if [ ! -z "$container_id" ]; then
    docker network connect $NETWORK_NAME $container_id
    echo "Connected $container_name to network $NETWORK_NAME"
  else
    echo "Container $container_name not found. Skipping network connection."
  fi
done

echo "Deployment completed successfully!"

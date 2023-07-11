# Use the official Apache image as the base image
FROM httpd:2.4

# Install required Apache modules
RUN sed -i '/LoadModule proxy_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule proxy_http_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule proxy_html_module/s/^#//g' /usr/local/apache2/conf/httpd.conf && \
    sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

# Copy your custom Apache reverse proxy configuration file
COPY ./apache/apache-config/httpd.conf /usr/local/apache2/conf/extra/httpd.conf

# Create the htdocs directory if it doesn't exist
RUN mkdir -p /usr/local/apache2/htdocs

# Expose port 80 for Apache
EXPOSE 80

# Start Apache as the main process
CMD ["httpd", "-D", "FOREGROUND"]

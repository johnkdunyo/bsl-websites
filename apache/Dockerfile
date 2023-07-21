FROM httpd:2.4

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -r /var/lib/apt/lists/*

RUN echo "LoadModule proxy_module modules/mod_proxy.so" >> /usr/local/apache2/conf/httpd.conf \
    && echo "LoadModule proxy_http_module modules/mod_proxy_http.so" >> /usr/local/apache2/conf/httpd.conf \
    && echo "LoadModule unixd_module modules/mod_unixd.so" >> /usr/local/apache2/conf/httpd.conf


COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80
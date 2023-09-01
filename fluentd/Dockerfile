# # FROM fluent/fluentd
# # RUN gem install faraday-net_http -v 2.1.0
# # RUN gem install fluent-plugin-elasticsearch -v 5.2.0

# FROM fluent/fluentd:v1.4.2-debian-2.0
# USER root
# RUN gem install fluent-plugin-elasticsearch -v 5.2.3
# RUN gem install elasticsearch-transport 

# COPY fluent.conf /fluentd/etc/
# USER fluent

# fluentd/Dockerfile

FROM fluent/fluentd:v1.12.0-debian-1.0
USER root
RUN gem install elasticsearch -v 7.12.0
RUN gem install fluent-plugin-elasticsearch -v 5.0.3
USER fluent
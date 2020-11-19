FROM ruby:2.6-alpine

RUN mkdir /nyx-post
WORKDIR /nyx-post
COPY post/app/Gemfile /nyx-post
COPY post/app/Gemfile.lock /nyx-post
RUN bundle config --global frozen 1
RUN bundle install --without development test
COPY post/app/lib /nyx-post/lib

EXPOSE 50052
ENTRYPOINT ["bundle", "exec"]
CMD ["bin/server"]

FROM ruby:2.6.6-alpine3.12 AS build-env

ARG RUBY_ROOT=/app
ARG BUILD_PACKAGES="build-base"
ARG PACKAGES="ruby-bundler"

WORKDIR $RUBY_ROOT

RUN apk update \
  && apk upgrade \
  && apk add --update --virtual --no-cache $BUILD_PACKAGES $PACKAGES \
  && rm -rf /var/cache/apk/*

COPY app/Gemfile* ./
COPY app/Gemfile Gemfile.lock $RUBY_ROOT/
RUN bundle config --global frozen 1 \
  && bundle install --without development:test:assets --retry 3 --path=vendor/bundle

COPY app/* ./

## Build done

FROM ruby:2.6.6-alpine3.12
ARG RUBY_ROOT=/app
ARG PACKAGES="ruby-bundler"

WORKDIR $RUBY_ROOT

RUN apk update \
  && apk upgrade \
  && apk add --update --no-cache $PACKAGES
COPY --from=build-env $RUBY_ROOT $RUBY_ROOT

EXPOSE 50052
CMD ["bundle", "exec", "bin/server"]

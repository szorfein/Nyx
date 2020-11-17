# Generate server

    $ rails new app --database=postgresql --skip-git --api --skip-action-mailer --skip-action-mailbox --skip-action-text --skip-action-cable --skip-javascript --skip-system-test --skip-webpack-install

# Create databases

    $ bundle exec rails db:create
    $ RAILS_ENV=production bundle exec rails db:create

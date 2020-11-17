# Generate server

    $ rails new app --database=postgresql --skip-git --api --skip-action-mailer --skip-action-mailbox --skip-action-text --skip-action-cable --skip-javascript --skip-system-test --skip-webpack-install

# Create databases

    $ bundle exec rails db:create
    $ RAILS_ENV=production bundle exec rails db:create

# GraphQL
We remove postgresql too

    $ rails new app --skip-active-record --skip-git --api --skip-action-mailer --skip-action-mailbox --skip-action-text --skip-active-storage --skip-action-cable --skip-javascript --skip-system-test --skip-webpack-install

    $ du -h
    126K

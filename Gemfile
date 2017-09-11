source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.3'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'webpacker-react', '~> 0.3.1'
gem 'active_model_serializers', '~> 0.10.0'
gem 'lp_token_auth', github: 'launchpadlab/lp_token_auth'
gem 'token_master', github: 'launchpadlab/token-master'
gem 'rails_util', github: 'launchpadlab/rails_util'
gem 'lp_csv_exportable', github: 'launchpadlab/lp_csv_exportable'
gem 'decanter'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'pry-rails'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'simplecov'
  gem 'codeclimate-test-reporter', '~> 1.0.0'
  gem 'launchy'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'rspec-collection_matchers'
  gem 'rails-controller-testing'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

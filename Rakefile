desc "development"
task :serve do |t|
  sh "bundle exec jekyll serve"
end

namespace :build do
  desc "build for staging"
  task :stage do
    sh "bundle exec jekyll build --config=_config.yml,_config_staging.yml"
  end
  desc "build for production"
  task :publish do |t|
    sh "bundle exec jekyll build --config=_config.yml,_config_publish.yml"
  end
end

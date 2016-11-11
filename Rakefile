desc "development"
task :serve do |t|
  sh "bundle exec jekyll serve"
end

desc "push to production"
task :publish do |t|
  sh "bundle exec jekyll build --config=_config.yml,_config_publish.yml"
end

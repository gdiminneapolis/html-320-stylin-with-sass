desc "development"
task :serve do |t|
  sh "bundle exec jekyll serve"
end

desc "push to staging"
task :staging do |t|
  sh "bundle exec jekyll build --config=_config.yml,_config_staging.yml"
  Dir.chdir("_site") do |sitedir|
    sh "git add --all && git commit -m '#{Time.now.strftime("%FT%T")}' && git push -u origin HEAD"
  end
end

desc "push to production"
task :publish do |t|
  sh "bundle exec jekyll build --config=_config.yml,_config_publish.yml"
  Dir.chdir("_site") do |sitedir|
    sh "git add --all && git commit -m '#{Time.now.strftime("%FT%T")}' && git push -u origin HEAD"
  end
end

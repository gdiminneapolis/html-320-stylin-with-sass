desc "push to staging"
task :staging do |t|
  sh "jekyll build --config=_config.yml,_config_staging.yml"
  Dir.chdir("_site") do |sitedir|
    sh "git add --all && git commit -m '#{Time.now.strftime("%FT%T")}' && git push -u origin HEAD"
  end
end

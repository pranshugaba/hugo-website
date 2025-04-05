# run this script from inside the img/ directory

tomlfile="cycling.toml"
touch $tomlfile

for image in *
do
  echo '[[photos]]' >> $tomlfile
  echo "filename = \"img/$image\"" >> $tomlfile
  echo "alt = \"\"\"" >> $tomlfile
  echo " " >> $tomlfile
  echo "\"\"\"" >> $tomlfile
  echo "caption = \"\"\"" >> $tomlfile
  echo " " >> $tomlfile
  echo "\"\"\"" >> $tomlfile
  echo " " >> $tomlfile
done

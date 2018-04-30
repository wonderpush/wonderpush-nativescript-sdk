#!/bin/bash

#git clone https://github.com/NativeScript/android-dts-generator.git
git submodule init
git submodule update

cd android-dts-generator/
cd dts-generator/
[ -f build/libs/dts-generator.jar ] || ./gradlew jar
SDK_VERSION=1.2.7.0
[ -f classes.jar ] || [ -f wonderpush-android-sdk-${SDK_VERSION}.aar ] || wget http://central.maven.org/maven2/com/wonderpush/wonderpush-android-sdk/${SDK_VERSION}/wonderpush-android-sdk-${SDK_VERSION}.aar
[ -f classes.jar ] || unzip wonderpush-android-sdk-${SDK_VERSION}.aar classes.jar
#rm wonderpush-android-sdk-${SDK_VERSION}.aar
java -jar build/libs/dts-generator.jar -input classes.jar -generate-multiple
#rm classes.jar
ls -1 out/* | sed -e 's#^.*/##' -e 's#^#/// <reference path="./android/#' -e 's#$#" />#' > out/android.d.ts
rm out/_helpers.d.ts
sed     -e '/_helpers\.d\.ts/d' \
	-e '/^\/\/\/ <reference path="\.\/java\.util\..*\.d\.ts" \/>$/d' \
	-e '/^\/\/\/ <reference path="\.\/java\.lang\..*\.d\.ts" \/>$/d' \
	-e '/^\/\/\/ <reference path="\.\/android\..*\.d\.ts" \/>$/d' \
	-e '/^\/\/\/ <reference path="\.\/org\.json\..*\.d\.ts" \/>$/d' \
	-i out/*
for file in out/*; do
	javaFile="${file#out/}"
	javaFile="${javaFile%.d.ts}"
	javaFile="../../../../../wonderpush-android-sdk/sdk/src/main/java/${javaFile//.//}.java"
	echo "$file"
	grep -n -E '^\s*(public|private).*(List|Collection|Class|Creator|AtomicReference|Map)<[^>]*>[^)]*\) {$' "$javaFile"
	while read genericLine; do
		echo "$genericLine"
	done < <(grep -E 'javautilList|javalangClass|javautilCollection|androidosParcelableCreator|javautilconcurrentatomicAtomicReference|javautilMap' "$file")
	echo
done
rm -Rf ../../../../src/typings/android/
mkdir ../../../../src/typings/android/
mv out/android.d.ts ../../../../src/typings/
mv out/* ../../../../src/typings/android/
#rm -Rf build build-tools .gradle out

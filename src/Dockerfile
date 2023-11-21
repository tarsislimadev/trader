FROM tmvdl/android:app

WORKDIR /app

RUN cordova create trader com.brtmvdl.trader trader

WORKDIR /app/trader

COPY app www

COPY cp.sh .

RUN cordova platform add android

RUN cordova build android

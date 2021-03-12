---
title: "平成振り返りデバイス"
date: 2019-05-02
year: 2019
period: "10 days"
role: "Hardware&Embed"
github: "https://github.com/oita-kosen/Human-Equipping-Incredible-SEnsor-Interface"
tags: ["組み込み", "ハードウェア", "3Dプリンタ"]
id: 5
blog_id: 103
thumbnail: '../../src/assets/images/heisei.jpg'
---

## 概要

株式会社サイバーエージェントの主催で2019/4/30に開催された，「平成最後のハッカソン」にて製作した作品です．
ハッカソンのテーマは「平成生まれの私たちが，平成を楽しく振り返ることができるサービス，モノ」でした．

私たちのチームは "物理的に「振り返る」ことで，平成にまつわるニュースがスマホ上に届く" というユニークなサービス/デバイスを製作しました．

## コンセプト

同じ高専を卒業したメンバーとのチームだったので，自分たちの得意分野である電子工作を使ったサービスにしました．
テーマが発表されてからの製作期間が10日間と短かったため，手元の部品と道具だけでできるだけユーモアの有る作品を作ろうと思い，無線対応マイコンと加速度センサーを用いた振り返りデバイスの作成に至りました．

## 工夫点

IoT用のMQTT通信を採用してオーバーヘッドと消費電力を抑える工夫をしたり，懐かしいゲーム・ボーイ風の筐体を３Dプリンタで作成しました．

## 技術

- フロントエンド: HTML, CSS, JS
- バックエンド:
    - GAS
    - Python+flask
    - CloudMQTT
    - Socket.io
- ハードウェア
    - マイコン: ESP32
    - 筐体: 3Dプリント出力
    - 組み込み言語: Arduino
    - センサー: 加速度・ジャイロ(MPU9250)
    - OLED

## Media

<iframe title="vimeo-player" src="https://player.vimeo.com/video/333354788" width="640" height="360" frameborder="0" allowfullscreen/>

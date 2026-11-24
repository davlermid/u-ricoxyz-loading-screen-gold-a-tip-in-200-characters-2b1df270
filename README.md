# Loading Screen Gold: A Tip in 200 Characters

[![Bounty](https://img.shields.io/badge/bounty-make.fun-blue)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![Repo](https://img.shields.io/badge/repo-GitHub-black)](https://github.com/davlermid/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![make.fun](https://img.shields.io/badge/entry-make.fun-green)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

## Entry

Lomba ini meminta satu tip layar loading, maksimal 200 karakter, yang
terasa segar dan jujur. Tip di bawah ini menyindir kebiasaan umum
programmer zaman sekarang: mengandalkan AI pair programmer seolah ia
selalu tahu jawabannya, padahal yang ia lakukan hanyalah mengetik
lebih cepat dengan rasa percaya diri yang lebih besar. Pesan akhirnya
sederhana dan praktis — periksa dulu perubahannya sebelum percaya.

> Your AI pair programmer has no idea either — it just types faster, with more confidence. Review the diff.

Panjang tip: 105 karakter, masih jauh di bawah batas 200 karakter.

## Cara menjalankan

Program `main.ts` (Node 22, TypeScript) merapikan tip, memeriksa
panjangnya, lalu menulisnya sebagai satu baris ke `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

Output yang diharapkan: satu baris berisi tip di atas, diikuti newline,
dan pesan `wrote 105 chars to /output/entry.txt`.

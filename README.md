# 浪浪之家 - 流浪狗主題網站

這是一個以流浪狗為主題的一頁式網站，目的是喚起人們對流浪狗問題的關注，並鼓勵捐款支持流浪狗救助工作。

## 網站特色

- 流暢的單頁滾動設計
- 引人入勝的起承轉合敘事結構
- 精美的視覺設計
- 互動元素與動畫效果
- 捐款與購買系統

## 技術堆疊

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion 動畫
- React Icons

## 開始使用

### 前置條件

- Node.js 18+ 版本
- npm 或 yarn

### 安裝

```bash
# 克隆專案
git clone https://github.com/yourusername/stray-dog-home.git
cd stray-dog-home

# 安裝依賴
npm install
```

### 開發

```bash
# 啟動開發伺服器
npm run dev
```

開發伺服器會在 http://localhost:3000 啟動。

### 構建

```bash
# 構建生產版本
npm run build

# 啟動生產伺服器
npm start
```

## 專案結構

- `/src/app` - Next.js 應用程式主目錄
- `/src/components` - React 元件
- `/public/images` - 圖片資源

## 網站架構

1. **Header** - 網站導航
2. **Hero** - 主視覺區域
3. **Story** - 流浪狗的故事
4. **Problems** - 流浪狗面臨的困境
5. **Solutions** - 解決方案
6. **Donate** - 捐款與購買區域
7. **Footer** - 頁腳與聯繫資訊

## 圖片替換

目前網站使用的是佔位圖片，在實際部署前，請更換為您自己的圖片。所有圖片都位於 `/public/images` 目錄下：

- hero-dog.jpg - 主視覺背景圖
- stray-dog-story.jpg - 故事區域圖片
- shelter.jpg - 收容所圖片
- medical.jpg - 醫療救助圖片
- adoption.jpg - 認養推廣圖片

## 許可證

MIT

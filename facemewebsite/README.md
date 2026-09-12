# FaceMe 官網設計 - 首頁與產品頁改版｜Case Study 網頁

依你提供的 Figma 設計稿（node-id: 796:18540）高還原製作的靜態網頁：版面結構、Section 順序、文字內容、字級層級與間距皆以 Figma Dev Mode 讀取到的實際數值為準，不自行重新設計版型。互動微動態與 RWD 縮放行為則參考 [beatricesung-design 案例頁](https://jiahsingsung.github.io/beatricesung-design/en/case-study-rider-app.html) 的節奏。

## 檔案結構

```
facemewebsite/
├── index.html          所有頁面內容與區塊結構
├── css/
│   └── style.css       版面、配色、RWD 全部樣式（含目錄註解，方便定位）
├── js/
│   └── main.js          捲動顯示動畫、Before/After 切換、手機選單、數字動畫、回頂部按鈕
├── images/              頁面圖片素材
└── README.md            本說明檔
```

## 還原依據與精確度說明（請詳閱）

我透過 Figma MCP 直接讀取設計稿的節點資料（座標、尺寸、字級、字距、顏色、間距），而不是憑截圖用眼睛估版：

- **整體畫布寬度 1920px，內容容器寬度 1256px**（左右各留白 332px）— 已用於 `--container` 變數。
- **Header 高度 65px**。
- **Hero 區塊是單欄、由上而下堆疊**：標題 → 說明文字 → Role/Team/Platform/Tools 資訊列 → 下方滿版主視覺圖（1256×580px，圓角 20px）。這點特別重要：先前版本誤把 Hero 做成「文字＋圖片左右並排」的雙欄版型，這次已依 Figma 實際結構改為單欄堆疊。
- **標題字級**：主標 52px（Bold）／段落標題 28px（Semibold，字距 0.03em）／卡片標題 24px／內文 16px（行高 1.6–1.7）／Eyebrow 標籤 16px，並改為「左側 3px 紫色色條＋文字」的樣式（Figma 原稿的真實樣式，不是徽章式圓角標籤）。
- **問題定義卡片**：寬 400px、padding 40px、圓角 20px、淺灰藍漸層底色 —— 已依實際數值調整（先前版本用的是猜測的白底陰影卡片樣式）。
- **整頁背景為單一延續的白底**，區塊之間以 1px 淺灰藍分隔線（非交錯的灰／深藍色塊）分開 —— 先前版本自行加入了「設計開發」深色底色區塊與灰底交錯排版，這次已移除，改為與其他區塊一致的白底＋分隔線樣式。

**已完整依據 Figma 實際節點資料重建的區塊**：Hero、專案背景、問題定義、專案目標（共 4 個區塊，含精確座標／字級／間距）。

**依同一套已驗證的設計系統延伸套用的區塊**：設計研究、首頁設計、產品頁改版策略、以共通設計邏輯延伸產品頁、設計開發、改版成果（共 6 個區塊）。這幾個區塊的文字內容一樣是從 Figma 節點直接擷取的真實文案，版型也套用了前 4 個區塊已驗證的容器寬度、字級、間距、分隔線樣式，但受限於 Figma MCP 這次工作階段的 API 呼叫額度（Starter plan 用量已達上限），沒有辦法針對這 6 個區塊逐一再讀取更細部的座標數值做逐像素校對。如果你需要這幾個區塊也做到逐像素校對，之後額度恢復或升級方案後，可以再請我針對這些區塊重新讀取 Figma 節點資料做精修。

## ⚠️ 關於圖片素材

Figma 內的真實截圖（首頁主視覺、競品網站截圖、產品頁完整截圖等）在這個工作環境中無法直接下載原始圖檔（圖片連結需透過瀏覽器存取，但目前環境的網路權限不允許連到 figma.com 的圖片伺服器）。因此 `images/` 資料夾內的圖片是依實際看到的畫面內容（版面配置、色彩、文字、UI 元件位置）重新繪製的高還原度示意圖，並非原始像素級截圖。

若需要換成真正的原始截圖，可以到 Figma 對應圖層執行「Export」匯出 PNG/JPG，再用**相同檔名**覆蓋 `images/` 內對應檔案即可，不需要改 HTML/CSS：

| 檔名 | 對應 Figma 內容 |
|---|---|
| hero-banner.svg | 首頁主視覺（FaceMe 官網首頁實際畫面，1256×580） |
| competitor-analysis-1~3.svg | 競品分析：Glory / FaceIO / AuthMe |
| wireframe-1~9.svg | 資訊架構 Wireframe 縮圖 x9 |
| visual-upgrade-mockup.svg | 視覺升級後 Desktop + Mobile Mockup |
| product-page-1~5.svg | 以共通設計邏輯延伸的 5 個真實產品頁 |

## 已實作的微動態 / 互動（參考 Reference Website 節奏）

- 頁面頂部捲動進度條
- Header 隨捲動加上毛玻璃背景
- 區塊進場淡入 + 位移動畫（IntersectionObserver，捲到才觸發）
- Before / After 互動切換元件（點擊標籤比較改版前後版面差異，共 5 處）
- 首頁主視覺輕微漂浮動畫
- 「可衡量的影響」數字捲動到畫面內時由 0 動畫跑到目標值
- 手機版漢堡選單（滑出、鎖定背景捲動）
- 回頂部按鈕（捲動一定距離後淡入）
- 已加入 `prefers-reduced-motion` 判斷，使用者關閉動態效果時會自動停用動畫

## RWD

Desktop 版本依 Figma 1256px 容器高還原；Tablet / Mobile 在不改變視覺風格的前提下，將多欄排列合理收攏為 2 欄或單欄。

- Desktop：`> 1100px`
- Tablet：`860px ~ 1100px`
- Mobile：`< 860px`（漢堡選單、單欄）
- Small Mobile：`< 480px`

## 如何預覽

直接用瀏覽器開啟 `index.html` 即可（不需要伺服器）。若要用本機伺服器預覽：

```bash
python3 -m http.server 8000
```

再開啟 `http://localhost:8000`。

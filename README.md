# 📚 Serverless AI Paper Tracker

A lightweight, **privacy-focused** research library that runs entirely in your browser. It combines **Semantic Scholar** for accurate metadata retrieval and **Google Gemini AI** for intelligent summarization.

**[Live Demo](https://alexis-jacq.github.io/)**

## ✨ Key Features

* **🔍 Instant Search:** Type a paper title to instantly fetch the Title, Abstract, PDF Link, and BibTeX citation from the **Semantic Scholar API**. No more manual copy-pasting.
* **🤖 AI Summarization:** Use the optional AI button to generate a one-sentence "TL;DR" summary of the abstract using Google Gemini.
* **📂 Organized Library:**
    * Collapsible folder structure (e.g., `Diffusion_Models/post-training/distillation`).
    * Automatic alphabetical sorting.
    * **Read/Unread** status toggles (📖 vs ✅).
* **🔒 Local Privacy:** All data is stored in your browser's **Local Storage**. No external database is used.
* **Zero Install:** Runs as a single HTML file.

---

## 🚀 Quick Setup (GitHub Pages)

### 1. Host the Code
1.  Fork this repository (or create a new one).
2.  Ensure `index.html` is in the root folder.
3.  **Important:** Create an empty file named `.nojekyll` in the root folder. This prevents GitHub from breaking the deployment.

### 2. Enable Deployment
1.  Go to **Settings** > **Pages**.
2.  Under **Build and deployment**, select **Source: Deploy from a branch**.
3.  Select `main` (or `master`) as the branch and `/ (root)` as the folder.
4.  Click **Save**. Your site will be live in a few minutes.

### 3. Get Your Free API Key (For Summaries)
To use the "AI Summarize" button, you need a free Google Gemini API key.
1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Log in with a personal Gmail account.
3.  Click **Get API Key** -> **Create API Key**.
4.  Copy the key.

---

## 📖 Usage Workflow

### 1. Configuration
* Open your deployed site.
* Click **⚙️ AI Settings** (top right).
* Paste your Gemini API Key.
* Click **🔄 Refresh Models** and select `gemini-1.5-flash`.

### 2. Adding a Paper
1.  **Search:** Type the paper title in the search box (e.g., "Attention is all you need") and press Enter.
2.  **Select:** Click the correct paper from the list.
    * *The tool automatically fills the Title, Abstract, Link, and formatted BibTeX.*
3.  **Categorize:** Manually enter a folder path (e.g., `Transformers/Foundation`).
4.  **Summarize (Optional):** Click **✨ AI Summarize** to have Gemini read the abstract and write a one-sentence summary.
5.  **Save:** Click **💾 Save Paper**.

### 3. Managing Data
* **Export:** Click **⬇️ Export .bib** to get a citation file ready for Overleaf/LaTeX.
* **Backup:** Since data lives in your browser cache, use **⬇️ Save Backup (JSON)** regularly to save your library to a file.
* **Restore:** Use **⬆️ Load Backup** to move your library to a new computer.

---

## 🛠 Troubleshooting

**Q: The Search doesn't find my paper.**
* **A:** The search relies on Semantic Scholar. Try typing the exact title or check if the paper is indexed there.

**Q: I see a 404 error when visiting the page.**
* **A:** Ensure you added the `.nojekyll` file to your repository. This tells GitHub to treat the repo as raw HTML.

---

## 🔒 Privacy & Security

* **Client-Side Only:** This application runs 100% in your browser. No data is sent to the repository owner.
* **API Usage:**
    * **Search:** Queries are sent to the [Semantic Scholar API](https://www.semanticscholar.org/product/api).
    * **Summaries:** Abstracts are sent to Google Gemini only when you click the "AI Summarize" button.
* **Data Persistence:** Your library exists only in your browser's `localStorage`. Use the JSON backup feature regularly.

## License

MIT License. Feel free to modify and use for your own research workflow.

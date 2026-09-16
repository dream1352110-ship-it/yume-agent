# yume-agent知识库

一个仿照个人知识库站点组织方式搭建的 Hello-Agents 前三章学习库：以 `notes/30-resources/tools/hello-agents/` 作为资源入口，用 Source Notes 记录章节主线，用 Concepts 拆分可复用知识点，再把每个知识点链接回本仓库的代码实践。

## 内容导航

| 文档 | 主题 | 配套代码 |
| --- | --- | --- |
| [知识库入口](notes/30-resources/tools/hello-agents/README.md) | 目录、学习路径与资源说明 | 全部内容 |
| [第一章 Source Note](notes/30-resources/tools/hello-agents/source-notes/chapter1-agent-foundations.md) | Agent 定义、类型、PEAS、Agent Loop | [`chapter1/demo1.py`](chapter1/demo1.py) |
| [第二章 Source Note](notes/30-resources/tools/hello-agents/source-notes/chapter2-agent-history.md) | 符号主义、专家系统、连接主义、强化学习 | [`chapter2/demo.py`](chapter2/demo.py) |
| [第三章 Source Note](notes/30-resources/tools/hello-agents/source-notes/chapter3-language-model-foundations.md) | N-gram、词向量、BPE、Transformer、Qwen | [`chapter3/`](chapter3/) |
| [Concept Notes](notes/30-resources/tools/hello-agents/concepts/README.md) | 可复用的原子知识点 | 全部示例 |
| [代码实践索引](docs/code-map.md) | 环境、运行方式、代码与知识点对应关系 | 全部示例 |

## 学习路径

1. 先阅读第一章，建立“感知 → 思考 → 行动 → 观察”的闭环模型。
2. 用第二章理解今天的 Agent 设计为什么强调学习、规划和协作。
3. 用第三章补齐 LLM、注意力和 Token 的基础，再回看第一章的 LLM Agent。
4. 运行 `chapter1/demo1.py`，观察模型如何选择工具并依据 Observation 继续循环。

## 快速开始

```bash
python -m venv .venv
source .venv/bin/activate
pip install openai python-dotenv requests tavily-python numpy torch transformers
```

第三章的 `demo5.py` 会下载 Qwen 模型，首次运行需要较大的磁盘空间和网络带宽。第一章需要在 `.env` 中配置 `OPENAI_API_KEY`、`OPENAI_BASE_URL`、`OPENAI_MODEL` 和 `TAVILY_API_KEY`，不要把密钥写入代码或提交到 Git。

## 来源与版权

本知识库是对 Datawhale [Hello-Agents](https://github.com/datawhalechina/hello-agents) 前三章的学习笔记与代码实践，原教程采用 CC BY-NC-SA 4.0 协议。本文档中的总结为学习用途的重新组织，引用原文时请遵守原项目许可证。

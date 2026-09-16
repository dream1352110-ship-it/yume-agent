# 第三章：大语言模型基础

## 语言模型在做什么

语言模型估计序列概率，并在给定上下文时预测下一个 Token。统计语言模型从 N-gram 开始，用有限历史近似完整历史：

`P(w_i | w_1...w_{i-1}) ≈ P(w_i | w_{i-n+1}...w_{i-1})`

N-gram 易实现但存在数据稀疏、上下文窗口短和语义泛化差等问题。神经语言模型用连续向量表示词，使“相近含义”可以在向量空间中接近；余弦相似度可用来比较向量方向。

## Transformer 的核心

Transformer 用注意力直接建立序列中任意位置之间的依赖，避免 RNN 的串行瓶颈。核心计算为：

`Attention(Q, K, V) = softmax(QKᵀ / √d_k)V`

- Query：当前要查询什么。
- Key：每个位置提供什么匹配线索。
- Value：被加权汇总的信息。
- Multi-Head：在多个子空间并行关注不同关系。
- Positional Encoding：注入顺序信息，因为注意力本身不认识先后。
- Feed-Forward、残差连接、LayerNorm：提升表达能力与训练稳定性。

编码器擅长理解输入，解码器擅长自回归生成；现代模型也有仅编码器、仅解码器和编码器-解码器等架构。

## Token 与生成

模型通常不直接处理“词”，而是处理 Token。Tokenizer 将文本切分为词、子词或字符片段，再映射为整数 ID；反向过程是 detokenize。子词方案在词表大小、未登录词处理和序列长度之间折中。

自回归生成每一步都根据已有 Token 计算下一个 Token 的概率。`temperature`、top-k、top-p 等参数控制随机性；`max_new_tokens` 控制输出上限。生成参数不是质量保证，生产系统仍需要事实校验、格式校验和安全策略。

## 提示词与 LLM Agent

提示词把目标、角色、上下文、约束和输出格式传给模型。Agent 中的 system prompt 应明确：可用工具、参数格式、失败处理、停止条件和安全边界。提示词不能替代程序验证：工具调用应有 schema，模型输出应可解析，敏感操作应要求授权。

## 局限与工程对策

| 局限 | 对策 |
| --- | --- |
| 幻觉与事实错误 | 检索/工具核验、引用来源、拒答和人工复核 |
| 上下文窗口有限 | 摘要、分层记忆、检索和上下文预算 |
| 输出不稳定 | 结构化输出、温度控制、重试与评测集 |
| 成本与延迟 | 小模型分流、缓存、批处理、限制循环次数 |
| 提示词注入与越权 | 工具权限、输入隔离、沙箱、审计日志 |

## 本章代码对应

- [`demo.py`](../chapter3/demo.py)：用 Bigram 计数计算句子概率。
- [`demo2.py`](../chapter3/demo2.py)：用二维词向量演示 `king - man + woman ≈ queen` 与余弦相似度。
- [`demo3.py`](../chapter3/demo3.py)：实现位置编码、多头注意力、前馈网络、编码器层和解码器层的核心结构。
- [`demo4.py`](../chapter3/demo4.py)：演示 BPE 的频率统计与高频 Token 对合并。
- [`demo5.py`](../chapter3/demo5.py)：使用 Transformers 加载 Qwen，套用聊天模板并生成回答。

建议按 `demo.py → demo2.py → demo3.py → demo4.py → demo5.py` 顺序运行，先理解概率和表示，再进入架构、分词与完整模型推理。

## 原始章节

[Datawhale：第三章 大语言模型基础](https://datawhalechina.github.io/hello-agents/#/./chapter3/%E7%AC%AC三章%20大语言模型基础)

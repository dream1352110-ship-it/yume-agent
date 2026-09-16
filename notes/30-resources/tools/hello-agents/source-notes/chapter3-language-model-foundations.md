# 第三章：语言模型基础

> 类型：Source Note  
> 来源：[Datawhale Hello-Agents 第三章](https://datawhalechina.github.io/hello-agents/#/./chapter3/%E7%AC%AC三章%20大语言模型基础)

## 学习目标

理解大语言模型处理文本和生成回答的基本过程：文本被 Tokenizer 切分为 Token，Token 被映射为向量，Transformer 建立上下文关系，模型预测下一个 Token，再重复这个过程生成回答。

```text
文本 -> Tokenizer -> Token ID -> 向量 -> Transformer -> 下一个 Token -> 文本
```

## N-gram：从统计概率开始

[`chapter3/demo.py`](../../../../../chapter3/demo.py) 用 Bigram 统计相邻词频，近似计算句子概率。N-gram 直观但受数据稀疏、短上下文和语义泛化差限制。详见 [N-gram 语言模型](../concepts/n-gram.md)。

## 词向量：从编号到表示

[`chapter3/demo2.py`](../../../../../chapter3/demo2.py) 用二维向量演示余弦相似度和 `king - man + woman ≈ queen`。Token ID 只是编号，向量才是模型可进行线性变换、相似度计算和上下文融合的表示。详见 [词向量与余弦相似度](../concepts/word-embeddings.md)。

## Tokenizer：BPE

[`chapter3/demo4.py`](../../../../../chapter3/demo4.py) 统计高频相邻符号并反复合并。BPE 在完整词和单字符之间折中：常见片段缩短序列，罕见词仍可拆成已知子词。详见 [BPE Tokenizer](../concepts/bpe-tokenizer.md)。

## Transformer：上下文建模

[`chapter3/demo3.py`](../../../../../chapter3/demo3.py) 包含位置编码、多头注意力、前馈网络、残差连接、LayerNorm 以及编码器/解码器层。注意力的核心是 `softmax(QK^T / sqrt(d_k))V`，它让每个 Token 按相关性汇总其他 Token 的信息。详见 [Scaled Dot-Product Attention](../concepts/attention.md)。

## 从模型到生成

[`chapter3/demo5.py`](../../../../../chapter3/demo5.py) 使用 Transformers 加载 Qwen：消息套用 chat template，Tokenizer 转为 ID，`generate()` 自回归地产生新 ID，再解码为文本。模型不是一次性写出答案，而是循环预测下一个 Token。

## 工程边界

幻觉、上下文长度、输出不稳定、成本延迟和提示词注入都不能只靠 Prompt 解决。生产 Agent 需要结构化输出、工具校验、检索与引用、权限隔离、缓存、评测集和人工复核。

## 可连接的概念

[[N-gram 语言模型]] · [[词向量与余弦相似度]] · [[BPE Tokenizer]] · [[Scaled Dot-Product Attention]] · [[Agent Loop]]

## Personal Note

- [第三章手写复习笔记](../personal-notes/chapter3-handwritten-review.md)：补充 RNN / LSTM、词嵌入直觉和注意力公式。

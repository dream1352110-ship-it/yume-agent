# 代码实践索引

| 文件 | 运行前提 | 对应知识点 |
| --- | --- | --- |
| [chapter1/demo1.py](code/chapter1-demo1.md) | `.env`、OpenAI 兼容模型、Tavily | Agent Loop、工具调用、Observation、停止条件 |
| [chapter2/demo.py](code/chapter2-demo.md) | Python 标准库 | 符号主义、规则库、模式匹配、推理机 |
| [chapter3/demo.py](code/chapter3-demo.md) | Python 标准库 | N-gram、最大似然估计、链式概率 |
| [chapter3/demo2.py](code/chapter3-demo2.md) | `numpy` | 词向量、余弦相似度、语义类比 |
| [chapter3/demo3.py](code/chapter3-demo3.md) | `torch` | 位置编码、多头注意力、Transformer 层 |
| [chapter3/demo4.py](code/chapter3-demo4.md) | Python 标准库 | BPE 子词合并 |
| [chapter3/demo5.py](code/chapter3-demo5.md) | `torch`、`transformers` | Tokenizer、chat template、自回归生成 |

## 运行示例

```bash
python chapter2/demo.py
python chapter3/demo.py
python chapter3/demo2.py
python chapter3/demo4.py
python chapter3/demo3.py
python chapter3/demo5.py
```

第一章代码会在导入阶段检查环境变量，建议先创建 `.env`：

```dotenv
OPENAI_API_KEY=your-key
OPENAI_BASE_URL=https://your-openai-compatible-endpoint/v1
OPENAI_MODEL=your-model
TAVILY_API_KEY=your-tavily-key
```

不要提交 `.env`。运行外部 API 示例时，应为请求设置超时并注意服务费用；运行 `demo5.py` 时可把 `model_id` 换成自己有权限使用的 Hugging Face 模型。

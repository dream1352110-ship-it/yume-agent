# N-gram 语言模型

N-gram 用前 `n-1` 个 Token 近似预测当前 Token。Bigram 的最大似然估计为：`P(w_i | w_{i-1}) = Count(w_{i-1}, w_i) / Count(w_{i-1})`。

它容易实现、便于解释，但会遇到未见序列概率为零、上下文窗口短和无法表达语义相似性的问题。

代码：[chapter3/demo.py](../../../../../code/chapter3-demo.md)。

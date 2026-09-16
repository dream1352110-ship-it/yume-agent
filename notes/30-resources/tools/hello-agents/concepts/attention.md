# Scaled Dot-Product Attention

注意力让一个 Token 按相关性读取其他 Token 的信息：`Attention(Q,K,V)=softmax(QK^T/sqrt(d_k))V`。Q 表示查询，K 表示可匹配特征，V 表示被汇总的内容；缩放避免点积过大，softmax 把分数变成权重。

多头注意力在多个子空间并行学习不同关系，再拼接回模型维度。位置编码补充顺序信息，残差连接和 LayerNorm 帮助训练稳定。

代码：[chapter3/demo3.py](../../../../../code/chapter3-demo3.md)。

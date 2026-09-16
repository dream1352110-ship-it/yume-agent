# Agent Loop

Agent Loop 是 Agent 与环境持续交互的最小控制结构：观察、思考、行动、再次观察。它把一次性问答变成可执行的序贯决策。

```text
observe -> decide -> act -> observe
```

模型只负责提出下一步并不等于系统完成了行动。编排器还要负责工具白名单、参数 schema、超时、重试、日志、最大步数和 `Finish` 条件。

对应代码：[chapter1/demo1.py](../../../../../code/chapter1-demo1.md)。

关联：[[PEAS 任务环境]] · [[Scaled Dot-Product Attention]]

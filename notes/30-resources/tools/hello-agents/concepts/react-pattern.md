# ReAct

ReAct 是 Reasoning + Acting 的 Agent 范式：模型一边推理，一边调用工具，再根据环境返回的 Observation 继续下一步。

```text
Thought -> Action -> Observation -> Thought -> ...
```

它适合需要外部信息或多步操作的任务。关键不只是让模型“想”，还要让每一次行动都有工具、参数、返回值和停止条件。

后续可补充：

- 你对 Thought、Action、Observation 的理解。
- ReAct 和普通问答的差别。
- ReAct 最容易出错的地方。

关联：[[Agent Loop]] · [[Plan-and-Solve]] · [[Reflection]]

# Plan-and-Solve

Plan-and-Solve 是先规划、再解决的 Agent 范式。它把复杂任务拆成若干步骤，降低模型一次性完成所有推理的压力。

```text
Goal -> Plan -> Step 1 -> Step 2 -> Check -> Final
```

这个范式适合多步骤任务。计划太粗会失去指导意义，计划太细又可能让 Agent 被错误步骤困住，所以计划粒度是核心问题。

后续可补充：

- 什么任务适合先做计划。
- 计划执行中发现错误时如何处理。
- 它和 ReAct 的关系。

关联：[[ReAct]] · [[Reflection]]

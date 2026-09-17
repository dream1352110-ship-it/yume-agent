# Reflection

Reflection 是让 Agent 对已经完成的回答、行动或中间结果进行检查，并基于反馈修正下一步。

```text
Output -> Critique -> Revise -> Output
```

它的价值在于把“检查”显式放进流程：事实是否可靠、步骤是否遗漏、格式是否符合要求、工具结果是否被正确使用。Reflection 也有成本，不能无限循环，需要明确评价标准和停止条件。

后续可补充：

- 你觉得 Agent 应该反思什么。
- 反思和人工检查有什么不同。
- 如何判断“已经够好，可以停止”。

关联：[[ReAct]] · [[Plan-and-Solve]]

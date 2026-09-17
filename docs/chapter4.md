# 第四章：智能体经典范式构建

## 这一章先看什么

第四章开始从“模型能力”进入“Agent 工作流”。这一章的核心问题是：一个 Agent 不只是回答问题，它还要能规划、调用工具、观察结果、复盘错误，并决定什么时候继续或停止。

## 三个主范式

| 范式 | 一句话理解 | 适合场景 |
| --- | --- | --- |
| [[ReAct]] | 边推理边行动，根据 Observation 调整下一步 | 搜索、查询、工具调用、多轮执行 |
| [[Plan-and-Solve]] | 先拆任务，再逐步完成 | 多步骤推理、写作、分析、代码任务 |
| [[Reflection]] | 对结果做检查和修正 | 回答校验、错误修复、迭代优化 |

## 和已有知识的关系

第三章讲 LLM 如何生成文本，第四章讲如何把 LLM 放进一个可控流程里。也就是说，模型负责产生候选推理和行动，Agent 框架负责组织循环、调用工具、保留上下文、处理失败和判断停止。

## 等待补充

这一页先作为第四章速览。后面会按你的学习进度，把你的理解整理成：

- Source Note：课程内容主线。
- Concept Notes：可点击展开的概念卡片。
- Personal Note：你的语言、例子、疑问和复盘。
- Code Notes：如果第四章有代码实践，会接到代码索引里。

## 入口

- [第四章 Source Note](notes/30-resources/tools/hello-agents/source-notes/chapter4-classic-agent-patterns.md)
- [第四章学习理解](notes/30-resources/tools/hello-agents/personal-notes/chapter4-my-understanding.md)

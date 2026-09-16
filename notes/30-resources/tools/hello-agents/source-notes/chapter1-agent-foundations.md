# 第一章：初识智能体

> 类型：Source Note  
> 来源：[Datawhale Hello-Agents 第一章](https://datawhalechina.github.io/hello-agents/#/./chapter1/%E7%AC%AC一章%20初识智能体)

## 本章问题

什么是 Agent？它如何和环境交互？为什么 LLM + 工具可以完成比聊天更复杂的任务？

## 核心摘要

Agent 是能感知环境、基于目标自主决策并采取行动的系统。其最小结构包含环境、传感器、决策机制和执行器；在软件 Agent 中，API 返回值、用户消息和数据库结果都可以是传感器输入，函数调用和服务请求都可以是执行器。

传统 Agent 从简单反射、模型反射、目标驱动、效用驱动逐步发展到学习型 Agent。LLM Agent 将大模型放进这个闭环：模型负责自然语言理解、任务分解和下一步选择，工具负责获取实时信息或改变外部状态。

## 运行闭环

```text
Observation -> Thought/Plan -> Action -> Environment -> Observation
```

`Thought` 不应被当成可信事实，而是当前决策的中间产物；`Action` 必须经过解析、参数校验和权限控制；`Observation` 应保留来源、时间和错误信息。详见 [Agent Loop](../concepts/agent-loop.md)。

## 任务环境

用 PEAS 描述性能、环境、执行器和传感器。数字世界通常部分可观察、随机、动态、序贯，还可能包含多个行动者，因此 Agent 需要记忆、重试、校验、超时和停止条件。详见 [PEAS 任务环境](../concepts/peas-task-environment.md)。

## 代码锚点

[`chapter1/demo1.py`](../../../../../chapter1/demo1.py) 用天气查询与景点搜索展示完整循环：system prompt 规定协议，`available_tools` 注册工具，`prompt_history` 保存上下文，主循环解析 `Action` 并追加 `Observation`。

## 可连接的概念

[[Agent Loop]] · [[PEAS 任务环境]] · [[工具调用]] · [[上下文窗口]]

## 我的提问

- 如何让 Agent 在工具失败时选择重试、换工具还是向用户澄清？
- 哪些动作必须脱离 LLM，改由确定性程序执行？

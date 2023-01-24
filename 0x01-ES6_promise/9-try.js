export default function guardrail(f) {
  const queue = [];
  try {
    queue.push(...[f(), 'Guardrail was processed']);
    return queue;
  } catch (error) {
    queue.push(...[error.message, 'Guardrail was processed']);
    return queue;
  }
}

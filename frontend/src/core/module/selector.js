export function getModuleState(state) {
  return state.$1;
}

export function get(state) {
  return getModuleState(state).$2;
}

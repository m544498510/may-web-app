export function getModuleState(state) {
  return state.secret;
}

export function getSecretList(state) {
  return getModuleState(state).list;
}

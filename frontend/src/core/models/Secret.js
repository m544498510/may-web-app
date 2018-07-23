export default class Secret {
  constructor(props) {
    this.id = props._id;
    this.siteName = props.siteName || '';
    this.url = props.url || '';
    this.name = props.name || '';
    this.password = props.password || '';
  }
}

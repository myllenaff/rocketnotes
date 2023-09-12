import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon sixe={20} />}
      <input {...rest} />
    </Container>
  );
}

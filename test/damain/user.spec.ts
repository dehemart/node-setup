import { User } from "../../src/domain/user";

test( "create user with id", () => {
  const user = new User( "Nome of User", "email@user", "IdOfUser" );
  const sut = user.id;

  expect( sut ).toEqual( "IdOfUser" );
} );

test( "Crate user with no id", () => {
  const user = new User( "Nome of User", "email@user" );
  const sut = user.id;

  expect( sut ).toBeDefined();
} );

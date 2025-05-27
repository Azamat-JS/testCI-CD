import { CreateUserDto, UpdateUserDto } from '@app/common';
import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAllUsers() {
    return `This action returns all users`;
  }

  findOneUser(id: string) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: string) {
    return `This action removes a #${id} user`;
  }
}

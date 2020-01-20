import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      email
    })
  }

  add(user: User) {
    return this.userRepository.save(user)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }
}

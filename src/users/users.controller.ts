import { Controller, Get, HttpCode, Post, Request, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  getAllUsers() {
    return this.usersService.findAll()
  }

  @Post()
  saveUser(@Req() req: Request) {
    const body: any = req.body
    const user = new User()

    user.email = body.email
    user.name = body.name
    user.password = body.password

    return this.usersService.add(user)
  }
}

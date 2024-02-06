import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Post()
  async createUser(@Body() user: User[]): Promise<User[]> {
    return await this.userRepository.save(user);
  }
  @Get(':id')
  async findUserById(@Param('id') id: any): Promise<User> {
    return await this.userRepository.findOneBy(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>
  ) {}

  findById(id: number): Promise<Product | null> {
    return this.productRepository.findOne({ id })
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find()
  }

  add(prod: Product) {
    return this.productRepository.save(prod)
  }
}

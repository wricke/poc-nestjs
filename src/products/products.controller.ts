import { Controller, Get, HttpCode, Post, Request, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(200)
  getAllProducts() {
    return this.productsService.findAll()
  }

  @Post()
  saveProduct(@Req() req: Request) {
    const body: any = req.body

    const product = new Product()

    product.name = body.name
    product.price = body.price
    product.user = body.user

    return this.productsService.add(product)
  }
}

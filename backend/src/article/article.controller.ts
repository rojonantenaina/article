import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  //create one article
  @Post()
  async createArticle(@Body() articleData: Partial<Article>): Promise<Article> {
    return this.articleService.createArticle(articleData);
  }

  //update one article
  @Put(':id_article')
  async updateArticle(
    @Param('id_article') id_article: number,
    @Body() articleData: Partial<Article>,
  ): Promise<Article> {
    return this.articleService.updateArticle(id_article, articleData);
  }

  //delete one article
  @Delete(':id_article')
  async deleteArticle(
    @Param('id_article') id_article: number,
  ): Promise<Article> {
    return this.articleService.deleteArticle(id_article);
  }

  //get all articles from article table
  @Get()
  async findAllArticles(): Promise<Article[]> {
    return this.articleService.findAllArticles();
  }

  //get one article from article table
  @Get(':id_article')
  async findOneArticle(
    @Param('id_article') id_article: number,
  ): Promise<Article> {
    return this.articleService.findOneArticle(id_article);
  }
}

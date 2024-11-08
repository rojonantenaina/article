import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  //    create one article
  async createArticle(articleData: Partial<Article>): Promise<Article> {
    const article = this.articleRepository.create(articleData);
    return await this.articleRepository.save(article);
  }

  //    get all articles from article table
  async findAllArticles(): Promise<Article[]> {
    return await this.articleRepository.find({
      where: { isDeleted: false },
    });
  }

  //   find one article
  async findOneArticle(id_article: number): Promise<Article> {
    return await this.articleRepository.findOneBy({ id_article: id_article });
  }

  //   update one article
  async updateArticle(
    id_article: number,
    articleData: Partial<Article>,
  ): Promise<Article> {
    await this.articleRepository.update(id_article, articleData);
    return this.findOneArticle(id_article);
  }

  //   soft delete one article
  async deleteArticle(id_article: number): Promise<Article> {
    await this.articleRepository.update(id_article, { isDeleted: true });
    return this.findOneArticle(id_article);
  }
}

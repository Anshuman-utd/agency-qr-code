import { IsInt, Min, IsOptional, IsString, Max } from 'class-validator';

export class CreateBatchDto {
  @IsInt({ message: 'Count must be an integer' })
  @Min(1, { message: 'Count must be at least 1' })
  @Max(1000, { message: 'Maximum batch size is 1000' })
  count: number;

  @IsOptional()
  @IsString()
  labelText?: string;
}

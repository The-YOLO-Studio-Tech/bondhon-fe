type FeaturePost = {
  id: number;
  title: string;
  thumbnail: string;
  created_at: Date;
  updated_at: Date;
};

type PostCategoryType = {
  title: string;
  thumbnail: string;
};

type FeatureVideoType = {
  id: number;
  url: string;
  title: string;
  created_at: Date;
  thumbnail: string;
};

type AddType = {
  id: number;
  add_banner: string;
  created_at: Date;
};

export type HomePageCoontentType = {
  feature_post: FeaturePost;
  feature_post_category1: PostCategoryType;
  feature_post_category2: PostCategoryType;
  feature_post_category3: PostCategoryType;
  feature_post_category4: PostCategoryType;
  feature_video: FeatureVideoType;
  square_add0: AddType;
  horizontal_add0: AddType;
  vartical_add0: AddType;
  vartical_add1: AddType;
};

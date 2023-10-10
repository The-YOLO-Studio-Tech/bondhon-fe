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

export type AddType = {
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
  feature_post_category5: PostCategoryType;
  feature_post_category6: PostCategoryType;
  feature_post_category7: PostCategoryType;
  feature_post_category9: PostCategoryType;
  feature_post_category10: PostCategoryType;
  feature_post_category11: PostCategoryType;
  feature_post_category12: PostCategoryType;
  feature_post_category13: PostCategoryType;
  feature_post_category14: PostCategoryType;
  feature_post_category15: PostCategoryType;
  feature_post_category16: PostCategoryType;
  feature_post_category17: PostCategoryType;
  feature_post_category18: PostCategoryType;
  feature_post_category19: PostCategoryType;
  feature_post_category20: PostCategoryType;
  feature_post_category21: PostCategoryType;
  feature_post_category22: PostCategoryType;
  feature_video: FeatureVideoType;
  square_add1: AddType;
  square_add2: AddType;
  square_add3: AddType;
  square_add4: AddType;
};

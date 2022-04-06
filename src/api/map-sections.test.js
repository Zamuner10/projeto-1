import {
  mapSections,
  mapSectionTwoColumns,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '602fdf2d540c00269e056178',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617b',
        name: 'contact',
        section_id: 'contact',
        __v: 0,
        id: '602fdf2d540c00269e05617b',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056178',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '623b67aefbdba21570c435f1',
      content: 'abc',
      title: 'news coverage and some surprises',
      metadata: {
        background: false,
        _id: '623b67affbdba21570c435f8',
        section_id: 'intro',
        name: 'intro',
        __v: 0,
        id: '623b67affbdba21570c435f8',
      },
      __v: 1,
      id: '623b67aefbdba21570c435f1',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe('abc');
  });

  it('should map grid text', () => {
    const data = mapTextGrid(
      {
        __component: 'section.section-grid',
        _id: '623b67aefbdba21570c435f2',
        description: 'abc',
        title: 'My grid',
        text_grid: [
          {
            _id: '623b67affbdba21570c435f5',
            title: 'Teste 1',
            description: 'Coisa',
            __v: 0,
            id: '623b67affbdba21570c435f5',
          },
          {
            _id: '623b67affbdba21570c435f6',
            title: 'Teste 2',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
            __v: 0,
            id: '623b67affbdba21570c435f6',
          },
          {
            _id: '623b67affbdba21570c435f7',
            title: 'Teste 3',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
            __v: 0,
            id: '623b67affbdba21570c435f7',
          },
        ],
        image_grid: [],
        metadata: {
          background: true,
          _id: '623b67b0fbdba21570c43601',
          section_id: 'grid-one',
          name: 'grid-one',
          __v: 0,
          id: '623b67b0fbdba21570c43601',
        },
        __v: 2,
        id: '623b67aefbdba21570c435f2',
      },
      {
        __component: 'section.section-grid',
        _id: '623b67aefbdba21570c435f3',
        description: 'Reprehenderit minus ad dolores provident maiores',
        title: 'Gallery',
        text_grid: [],
        image_grid: [
          {
            _id: '623b6b31fbdba21570c43636',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c43619',
              name: 'http://source.unsplash.com/random/360x360?r=2',
              alternativeText: 'tenis',
              caption: 'tenis',
              hash: '360x360_r_2_16deaacc3c',
              ext: '',
              mime: 'image/jpeg',
              size: 16.44,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_2_16deaacc3c.jpg',
              provider_metadata: {
                public_id: '360x360_r_2_16deaacc3c',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=2',
                  hash: 'thumbnail_360x360_r_2_16deaacc3c',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 3.98,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_2_16deaacc3c.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_2_16deaacc3c',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.608Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c43619',
            },
            id: '623b6b31fbdba21570c43636',
          },
          {
            _id: '623b6b31fbdba21570c43637',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c4361b',
              name: 'http://source.unsplash.com/random/360x360?r=4',
              alternativeText: 'Obra de Arte',
              caption: 'Obra de Arte',
              hash: '360x360_r_4_38e9e760dd',
              ext: '',
              mime: 'image/jpeg',
              size: 29.39,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_4_38e9e760dd.jpg',
              provider_metadata: {
                public_id: '360x360_r_4_38e9e760dd',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=4',
                  hash: 'thumbnail_360x360_r_4_38e9e760dd',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 6.11,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_4_38e9e760dd.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_4_38e9e760dd',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.679Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c4361b',
            },
            id: '623b6b31fbdba21570c43637',
          },
          {
            _id: '623b6b31fbdba21570c43638',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c4361a',
              name: 'http://source.unsplash.com/random/360x360?r=6',
              alternativeText: 'Quadro lindo',
              caption: 'Quadro lindo',
              hash: '360x360_r_6_f2b5cc0b42',
              ext: '',
              mime: 'image/jpeg',
              size: 17.15,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_6_f2b5cc0b42.jpg',
              provider_metadata: {
                public_id: '360x360_r_6_f2b5cc0b42',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=6',
                  hash: 'thumbnail_360x360_r_6_f2b5cc0b42',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 3.96,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_6_f2b5cc0b42.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_6_f2b5cc0b42',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.644Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c4361a',
            },
            id: '623b6b31fbdba21570c43638',
          },
          {
            _id: '623b6b31fbdba21570c43639',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c43618',
              name: 'http://source.unsplash.com/random/360x360?r=1',
              alternativeText: 'Sidney',
              caption: 'Sidney',
              hash: '360x360_r_1_acc26e9e7c',
              ext: '',
              mime: 'image/jpeg',
              size: 15.76,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_1_acc26e9e7c.jpg',
              provider_metadata: {
                public_id: '360x360_r_1_acc26e9e7c',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                  hash: 'thumbnail_360x360_r_1_acc26e9e7c',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 3.77,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_1_acc26e9e7c.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_1_acc26e9e7c',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.595Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c43618',
            },
            id: '623b6b31fbdba21570c43639',
          },
          {
            _id: '623b6b31fbdba21570c4363a',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c4361d',
              name: 'http://source.unsplash.com/random/360x360?r=3',
              alternativeText: 'Prédio',
              caption: 'prédio',
              hash: '360x360_r_3_c93eba0ef4',
              ext: '',
              mime: 'image/jpeg',
              size: 28.28,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_3_c93eba0ef4.jpg',
              provider_metadata: {
                public_id: '360x360_r_3_c93eba0ef4',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=3',
                  hash: 'thumbnail_360x360_r_3_c93eba0ef4',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 5.49,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_3_c93eba0ef4.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_3_c93eba0ef4',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.914Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c4361d',
            },
            id: '623b6b31fbdba21570c4363a',
          },
          {
            _id: '623b6b31fbdba21570c4363b',
            __v: 0,
            image: {
              _id: '623b68c2fbdba21570c4361c',
              name: 'http://source.unsplash.com/random/360x360?r=5',
              alternativeText: 'Foto contemporânea  notebook sobre a mesa',
              caption: 'Foto contemporânea notebook sobre a mesa',
              hash: '360x360_r_5_ac48fd6d77',
              ext: '',
              mime: 'image/jpeg',
              size: 13.6,
              width: 360,
              height: 360,
              url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_5_ac48fd6d77.jpg',
              provider_metadata: {
                public_id: '360x360_r_5_ac48fd6d77',
                resource_type: 'image',
              },
              formats: {
                thumbnail: {
                  name: 'thumbnail_http://source.unsplash.com/random/360x360?r=5',
                  hash: 'thumbnail_360x360_r_5_ac48fd6d77',
                  ext: '',
                  mime: 'image/jpeg',
                  width: 156,
                  height: 156,
                  size: 4.11,
                  path: null,
                  url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_5_ac48fd6d77.jpg',
                  provider_metadata: {
                    public_id: 'thumbnail_360x360_r_5_ac48fd6d77',
                    resource_type: 'image',
                  },
                },
              },
              provider: 'cloudinary',
              related: [],
              createdAt: '2022-03-23T18:36:50.695Z',
              updatedAt: '2022-03-23T18:53:54.115Z',
              __v: 0,
              id: '623b68c2fbdba21570c4361c',
            },
            id: '623b6b31fbdba21570c4363b',
          },
        ],
        metadata: {
          background: false,
          _id: '623b67b0fbdba21570c43600',
          __v: 0,
          name: 'gallery',
          section_id: 'gallery',
          id: '623b67b0fbdba21570c43600',
        },
        __v: 2,
        id: '623b67aefbdba21570c435f3',
      },
    );
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '623b67aefbdba21570c435f3',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          _id: '623b6b31fbdba21570c43636',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c43619',
            name: 'http://source.unsplash.com/random/360x360?r=2',
            alternativeText: 'abc',
            caption: 'tenis',
            hash: '360x360_r_2_16deaacc3c',
            ext: '',
            mime: 'image/jpeg',
            size: 16.44,
            width: 360,
            height: 360,
            url: 'a.svg',
            provider_metadata: {
              public_id: '360x360_r_2_16deaacc3c',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=2',
                hash: 'thumbnail_360x360_r_2_16deaacc3c',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.98,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_2_16deaacc3c.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_2_16deaacc3c',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.608Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c43619',
          },
          id: '623b6b31fbdba21570c43636',
        },
        {
          _id: '623b6b31fbdba21570c43637',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c4361b',
            name: 'http://source.unsplash.com/random/360x360?r=4',
            alternativeText: 'Obra de Arte',
            caption: 'Obra de Arte',
            hash: '360x360_r_4_38e9e760dd',
            ext: '',
            mime: 'image/jpeg',
            size: 29.39,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_4_38e9e760dd.jpg',
            provider_metadata: {
              public_id: '360x360_r_4_38e9e760dd',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=4',
                hash: 'thumbnail_360x360_r_4_38e9e760dd',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.11,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_4_38e9e760dd.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_4_38e9e760dd',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.679Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c4361b',
          },
          id: '623b6b31fbdba21570c43637',
        },
        {
          _id: '623b6b31fbdba21570c43638',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c4361a',
            name: 'http://source.unsplash.com/random/360x360?r=6',
            alternativeText: 'Quadro lindo',
            caption: 'Quadro lindo',
            hash: '360x360_r_6_f2b5cc0b42',
            ext: '',
            mime: 'image/jpeg',
            size: 17.15,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_6_f2b5cc0b42.jpg',
            provider_metadata: {
              public_id: '360x360_r_6_f2b5cc0b42',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=6',
                hash: 'thumbnail_360x360_r_6_f2b5cc0b42',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.96,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_6_f2b5cc0b42.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_6_f2b5cc0b42',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.644Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c4361a',
          },
          id: '623b6b31fbdba21570c43638',
        },
        {
          _id: '623b6b31fbdba21570c43639',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c43618',
            name: 'http://source.unsplash.com/random/360x360?r=1',
            alternativeText: 'Sidney',
            caption: 'Sidney',
            hash: '360x360_r_1_acc26e9e7c',
            ext: '',
            mime: 'image/jpeg',
            size: 15.76,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_1_acc26e9e7c.jpg',
            provider_metadata: {
              public_id: '360x360_r_1_acc26e9e7c',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=1',
                hash: 'thumbnail_360x360_r_1_acc26e9e7c',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 3.77,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_1_acc26e9e7c.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_1_acc26e9e7c',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.595Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c43618',
          },
          id: '623b6b31fbdba21570c43639',
        },
        {
          _id: '623b6b31fbdba21570c4363a',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c4361d',
            name: 'http://source.unsplash.com/random/360x360?r=3',
            alternativeText: 'Prédio',
            caption: 'prédio',
            hash: '360x360_r_3_c93eba0ef4',
            ext: '',
            mime: 'image/jpeg',
            size: 28.28,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_3_c93eba0ef4.jpg',
            provider_metadata: {
              public_id: '360x360_r_3_c93eba0ef4',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=3',
                hash: 'thumbnail_360x360_r_3_c93eba0ef4',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 5.49,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_3_c93eba0ef4.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_3_c93eba0ef4',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.914Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c4361d',
          },
          id: '623b6b31fbdba21570c4363a',
        },
        {
          _id: '623b6b31fbdba21570c4363b',
          __v: 0,
          image: {
            _id: '623b68c2fbdba21570c4361c',
            name: 'http://source.unsplash.com/random/360x360?r=5',
            alternativeText: 'Foto contemporânea  notebook sobre a mesa',
            caption: 'Foto contemporânea notebook sobre a mesa',
            hash: '360x360_r_5_ac48fd6d77',
            ext: '',
            mime: 'image/jpeg',
            size: 13.6,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060608/360x360_r_5_ac48fd6d77.jpg',
            provider_metadata: {
              public_id: '360x360_r_5_ac48fd6d77',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_http://source.unsplash.com/random/360x360?r=5',
                hash: 'thumbnail_360x360_r_5_ac48fd6d77',
                ext: '',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 4.11,
                path: null,
                url: 'https://res.cloudinary.com/dgvguxih0/image/upload/v1648060609/thumbnail_360x360_r_5_ac48fd6d77.jpg',
                provider_metadata: {
                  public_id: 'thumbnail_360x360_r_5_ac48fd6d77',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: [],
            createdAt: '2022-03-23T18:36:50.695Z',
            updatedAt: '2022-03-23T18:53:54.115Z',
            __v: 0,
            id: '623b68c2fbdba21570c4361c',
          },
          id: '623b6b31fbdba21570c4363b',
        },
      ],
      metadata: {
        background: false,
        _id: '623b67b0fbdba21570c43600',
        __v: 0,
        name: 'gallery',
        section_id: 'gallery',
        id: '623b67b0fbdba21570c43600',
      },
      __v: 2,
      id: '623b67aefbdba21570c435f3',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('abc');
  });
});

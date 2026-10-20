import { getStaticProps as articleProps } from 'pages/news/articles/[slug]';
import { getStaticProps as authorProps } from 'pages/news/authors/[slug]';
import { getStaticProps as sectionProps } from 'pages/news/sections/[slug]';
import { getClient } from 'lib/sanity.server';

jest.mock('lib/sanity.server', () => ({
  getClient: jest.fn(),
}));

it.each([articleProps, authorProps, sectionProps])(
  'returns a 404 for a missing CMS document',
  async (getStaticProps) => {
    const fetch = jest.fn().mockResolvedValue(null);
    (getClient as jest.Mock).mockReturnValue({ fetch });
    expect(
      await getStaticProps({ params: { slug: 'deleted-document' } })
    ).toEqual({
      notFound: true,
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  }
);

it('preserves CMS connection errors instead of reporting a missing page', async () => {
  const error = new Error('CMS unavailable');
  (getClient as jest.Mock).mockReturnValue({
    fetch: jest.fn().mockRejectedValue(error),
  });
  await expect(
    articleProps({ params: { slug: 'existing-document' } })
  ).rejects.toBe(error);
});

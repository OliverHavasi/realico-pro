import { ArrowRight, MessageSquare } from "lucide-react";

interface ForumPost {
  author: string;
  avatar: string;
  category: string;
  date: string;
  title: string;
  preview: string;
}

export function ForumSection({ posts }: { posts: ForumPost[] }) {
  return (
    <div className="glass-card p-6 lg:col-span-1">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-medium tracking-wide">Fórum</h2>
          <p className="text-sm text-muted-foreground font-normal tracking-wide">Začnime debatu!</p>
        </div>
        <button className="text-muted-foreground text-sm font-normal hover:text-foreground flex items-center gap-1 transition-colors tracking-wide">
          Všetky <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <div key={i} className="flex gap-3 py-3 border-b border-border last:border-0">
            <div className="h-10 w-10 rounded-full bg-white ring-[2px] ring-primary flex items-center justify-center shrink-0 text-sm font-semibold text-primary">
              {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">{post.title}</span>
                <span className="text-xs font-normal text-muted-foreground">| {post.category}</span>
                <span className="text-xs font-normal text-muted-foreground">| {post.author} - {post.date}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{post.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

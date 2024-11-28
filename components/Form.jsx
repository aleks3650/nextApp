import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start, flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient"> {type} post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorpgism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
            <textarea
              value={post.prompt}
              onChange={(e) => setPost({ ...post, prompt: e.target.value })}
              placeholder="write prompt here..."
              required
              className="form_textarea"></textarea>
          </span>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            tag<span> (#prompt or #idea)</span>
            <textarea
              value={post.tag}
              required
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
              placeholder="write tag here..."
              className="form_input"></textarea>
          </span>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
